import './SocialNetworks.css'
const SocialNetworks = () => {
  return (
    <div><p id='socialNetworks'>Seguinos:</p> 
        <a href="https://api.whatsapp.com/send?phone=541136629767&text=%C2%A1Hola!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20Mitica%20Amapola." target={'_blank'}>
            <img id="wpp" src="/whatsapp.png" alt="wpp" />
        </a>
        <a href="https://www.instagram.com/mitica_amapola/" target={'_blank'}>
            <img id="ig" src="/instagram.png" alt="wpp" />
        </a>
        <a href="https://www.tiktok.com/@miticaamapola" target={'_blank'}>
            <img id="ig" src="/tiktok.png" alt="tiktok" />
        </a>
    </div>
  )
}

export default SocialNetworks