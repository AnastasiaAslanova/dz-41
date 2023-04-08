import './Hero.scss'


function Hero() {
    return (
       <div className='hero-section'>
           <img className='hero-img' width='50%' height='500px' src={require('../../images/male-person-using-phone-subway-1444732.jpg')}/>
           <div className='hero-info'>
                <p className='title'>MY BIG TITLE</p>
               <p className='article'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aut beatae
                   consequuntur cupiditate dolor eos exercitationem molestias nulla omnis placeat praesentium quibusdam
                   quidem quis quos, recusandae, sed sunt vel voluptate?</p>
           </div>
       </div>
    )
}

export default Hero;