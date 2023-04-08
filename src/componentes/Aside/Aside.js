import './Aside.scss'
import Dash from "../../svg/dashboard_119241.svg";
import Dollar from "../../svg/dolar_121855.svg";
import Catalog from "../../svg/layerstack_120023.svg";
import Customers from "../../svg/mesage.svg"

function Aside() {

    const links = [
        {
            id: 1,
            name: 'Dashboard',
            svg: Dash,
        },
        {
            id: 2,
            name: 'Sales',
            svg: Dollar,
        },
        {
            id: 3,
            name: 'Catalog',
            svg: Catalog,
        },
        {
            id: 4,
            name: 'Customers',
            svg: Customers,
        }
    ];

    let lis = links.map(({id, name, svg}) => (
        <li className='aside-link' key={id}>
            <img className='aside-icon' src={svg}/>
            {name}
        </li>
    ));

    return (
        <aside className='aside'>
            <nav>
                <ul>
                    {lis}
                </ul>
            </nav>
        </aside>
    )
}

export default Aside;