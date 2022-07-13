import Row from '../../components/Row/Row';
import Background from '../../components/Background/Background';

const Drama = () => {
    return (
        <>
            <Background fav={false}/>
            <Row title="Drama" fetchURL={"http://localhost:8000/"} />
        </>
    )
}

export default Drama;