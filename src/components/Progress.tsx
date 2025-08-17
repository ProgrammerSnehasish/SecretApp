export default function Progress() {
    return(
        <div style={{ display:'grid',position:'fixed', height:'100dvh', zIndex:9999999, placeItems: 'center',width:'100dvw',backgroundColor:'#f5eaea62',backdropFilter:'blur(0.5px)'}}>
            <div className="progress"><b>Creating...</b></div>
        </div>
    );
}