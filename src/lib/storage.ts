// Lightweight localStorage wrapper for polls and flight details

export function getVotes(pollId: string): Record<string, string[]> {
  try {
    const stored = localStorage.getItem(`poll_${pollId}`)
    return stored ? JSON.parse(stored) : {}
  } catch {
    return {}
  }
}

export function castVote(pollId: string, optionId: string, voterName: string) {
  const votes = getVotes(pollId)
  // Remove voter from any other option first
  Object.keys(votes).forEach(key => {
    votes[key] = votes[key].filter(n => n !== voterName)
  })
  if (!votes[optionId]) votes[optionId] = []
  votes[optionId].push(voterName)
  localStorage.setItem(`poll_${pollId}`, JSON.stringify(votes))
  return votes
}

export function getFlightDetails() {
  try {
    const stored = localStorage.getItem('flight_details')
    return stored ? JSON.parse(stored) : null
  } catch {
    return null
  }
}

export function saveFlightDetails(details: object) {
  localStorage.setItem('flight_details', JSON.stringify(details))
}

export function getCurrentUser(): string | null {
  return localStorage.getItem('iceland_user')
}

export function setCurrentUser(name: string) {
  localStorage.setItem('iceland_user', name)
}
