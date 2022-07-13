import Background from '../../components/Background/Background';
import Row from '../../components/Row/Row';

const Action = () => {
    return(
        <>
            <Background fav={false}/>
            <Row title="Action" fetchURL={"http://localhost:8000/"} />
        </>
    )
}

export default Action;