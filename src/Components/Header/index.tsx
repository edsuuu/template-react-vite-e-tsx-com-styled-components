import { Link } from 'react-router-dom';
import { Navbar } from './styled';

export default function Header() {
    return (
        <Navbar>
            <Link to="/">Home</Link>
            <Link to="pagina2">pagina2</Link>
        </Navbar>
    );
}
