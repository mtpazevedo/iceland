import { useState, useEffect } from 'react'
import { Poll } from '../data/polls'
import { getVotes, castVote, getCurrentUser } from '../lib/storage'

const CREW = ['Biba', 'Flavia', 'Krysse', 'Marcella', 'Tereza']

interface Props { poll: Poll }

export default function PollCard({ poll }: Props) {
  const [votes, setVotes] = useState<Record<string, string[]>>({})
  const [voter, setVoter] = useState<string>('')
  const [voted, setVoted] = useState(false)

  useEffect(() => {
    setVotes(getVotes(poll.id))
    const user = getCurrentUser()
    if (user) {
      setVoter(user)
      const existing = getVotes(poll.id)
      setVoted(Object.values(existing).some(v => v.includes(user)))
    }
  }, [poll.id])

  const totalVotes = Object.values(votes).reduce((sum, arr) => sum + arr.length, 0)

  function handleVote(optionId: string) {
    if (!voter) return
    const updated = castVote(poll.id, optionId, voter)
    setVotes(updated)
    setVoted(true)
  }

  function handleSelect(name: string) {
    localStorage.setItem('iceland_user', name)
    setVoter(name)
    const existing = getVotes(poll.id)
    setVoted(Object.values(existing).some(v => v.includes(name)))
  }

  const myVote = Object.entries(votes).find(([, voters]) => voters.includes(voter))?.[0]

  return (
    <div className="card-glass p-6 md:p-8">
      <h3 className="font-display text-2xl md:text-3xl text-cream font-light mb-1">{poll.question}</h3>
      {poll.subtitle && <p className="text-cream/70 text-base mb-6">{poll.subtitle}</p>}

      {/* Name selector */}
      <div className="mb-6 flex items-center gap-3">
        <span className="text-cream/60 text-sm shrink-0">Voting as:</span>
        <select
          value={voter}
          onChange={e => handleSelect(e.target.value)}
          className="bg-charcoal border border-stone/50 rounded-lg px-4 py-2 text-cream text-sm focus:outline-none focus:border-glacier cursor-pointer"
        >
          <option value="" disabled>Pick your name…</option>
          {CREW.map(name => (
            <option key={name} value={name}>{name}</option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {poll.options.map(option => {
          const count = votes[option.id]?.length || 0
          const pct = totalVotes > 0 ? Math.round((count / totalVotes) * 100) : 0
          const isMyVote = myVote === option.id
          const voters = votes[option.id] || []

          return (
            <button
              key={option.id}
              onClick={() => voter && handleVote(option.id)}
              disabled={!voter}
              className={`w-full text-left p-4 rounded-xl border transition-all duration-200 relative overflow-hidden
                ${isMyVote ? 'border-glacier bg-glacier/10' : 'border-stone/40 hover:border-mist/50 hover:bg-ash/80'}
                ${!voter ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
              `}
            >
              {voted && (
                <div className="absolute inset-y-0 left-0 bg-glacier/10 transition-all duration-700 rounded-xl"
                  style={{ width: `${pct}%` }} />
              )}
              <div className="relative flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <span className="text-2xl mt-0.5">{option.emoji}</span>
                  <div>
                    <div className={`font-medium text-base ${isMyVote ? 'text-glacier' : 'text-cream'}`}>
                      {option.text}
                    </div>
                    {option.subtext && (
                      <div className="text-cream/65 text-sm mt-0.5">{option.subtext}</div>
                    )}
                    {voted && voters.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {voters.map(v => (
                          <span key={v} className="text-xs bg-stone/40 text-mist px-2 py-0.5 rounded-full">{v}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                {voted && (
                  <div className="text-right shrink-0">
                    <div className={`text-sm font-medium ${isMyVote ? 'text-glacier' : 'text-cream/60'}`}>{pct}%</div>
                    <div className="text-cream/40 text-xs">{count} vote{count !== 1 ? 's' : ''}</div>
                  </div>
                )}
              </div>
            </button>
          )
        })}
      </div>

      {voter && voted && (
        <p className="text-cream/40 text-sm mt-4 text-center">
          Voted as <span className="text-mist">{voter}</span> · {totalVotes} vote{totalVotes !== 1 ? 's' : ''} total
        </p>
      )}
    </div>
  )
}
