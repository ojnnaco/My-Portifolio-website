import './About.css';
import mypics from '../../images/mypics.jpg';
import CV from '../../assets/CV.PDF'


const About = () => {
  return (
    <div className='about'>
    <div className="a-left-side">
        <div className="a-card bg"></div>
        <div className="a-card">
            <img src={mypics} alt="" className="a-img" />
        </div>
    </div>
    <div className="a-right-side">
        <h1 className="a-right-title">About Me</h1>
        <p className="a-right-desc"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, neque? Accusamus quidem dicta itaque laboriosam porro quod exercitationem, ea voluptas assumenda suscipit enim distinctio quis similique molestiae doloribus! Ipsam necessitatibus deleniti illo enim, ipsum dolorum ullam laudantium corporis! Ab ipsum a deserunt omnis at eos inventore laboriosam ea beatae fugit? </p>
          <a href={CV} download>
          <button className='download'>Download CV</button>
          </a>
        
        </div>
    </div>
  )
}

export default About