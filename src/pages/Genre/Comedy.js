import Row from '../../components/Row/Row';
import Background from '../../components/Background/Background';

const Comedy = () => {
    return(
        <>
            <Background fav={false}/>
            <Row title="Comedy" fetchURL={"http://localhost:8000/"} />
        </>
    )
}

export default Comedy;