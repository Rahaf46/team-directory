function TeamMember(props) {
  return (
    <article className="team-member">
      <img src={props.image} alt={props.name} />
      <h2>{props.name}</h2>
      <p>{props.position}</p>
    </article>
  )
}

export default TeamMember
