import { polls } from '../data/polls'
import PollCard from '../components/PollCard'

export default function Polls() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 max-w-3xl mx-auto">
      <div className="text-center mb-16">
        <p className="section-label mb-4">Democracy in action</p>
        <h1 className="display-title text-5xl md:text-6xl mb-4">Polls</h1>
        <p className="text-cream/50 max-w-xl mx-auto">
          Important decisions that shouldn't be made unilaterally. Set your name and vote.
          Results are visible to everyone on this page.
        </p>
        <p className="text-cream/30 text-xs mt-3">
          Note: votes are saved in your browser. Share this link so everyone can vote on their device.
        </p>
      </div>

      <div className="space-y-6">
        {polls.map(poll => (
          <PollCard key={poll.id} poll={poll} />
        ))}
      </div>
    </div>
  )
}
