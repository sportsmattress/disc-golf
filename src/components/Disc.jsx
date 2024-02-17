

export const Disc = ({disc, speed}) => {

    return (
      <div className="discs">
        <p>{disc.disc}</p>
        <p>{speed.speed}</p>
      </div>
    )
  }