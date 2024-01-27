export function UseConfig(){

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: window.innerWidth < 781 ? 2 : 4, //quantos slides que exibir por tela
        slidesToScroll: 1,  //quantos slides quer scrollar quando aperta o botao
        autoplaySpeed: 2000,
        autoplay: true,
        arrows: false, //se as setas aparece
        draggable: true ,//se terá scroll
    };
    return{
        settings
    }
}