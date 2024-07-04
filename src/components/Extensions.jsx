import data from '../links.json'
const Extensions = () => {

  return (
    <>
    <div className="download">
        <header>
            <h5>Download the extension</h5>
            <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve 
            got a favourite you’d like us to prioritize.</p>
        </header>
        <div className="browser-links">
        { data.map(item => (
        <div key={item.id}>
        <img src={item.imageUrl} alt={item.title} />
          <h6>{item.title}</h6>
          <p>{item.version}</p>
        </div>
      ))}
        </div>
    </div>
    </>
  )
}
 
export default Extensions