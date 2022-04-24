import Link from "next/link";
import { useState } from "react";

export default function Nav() {
    const [OpenMenu, setOpenMenu] = useState(false);

    return (
        <>
            <nav className="navbar d-none d-md-flex bg-dark p-1 border-bottom border-3 px-5">
                <Link href="/" >
                    <a className="navbar-brand mx-2" style={{ alignItems: "center" }} >
                        <img src="/lani-5andar2.svg" alt="Lani Systems Logo" width={225} height={35} />
                    </a>
                </Link>
                <Link href="/Login"  >
                    <a className="text-white" style={{ alignItems: "center" }}>Minha Area</a>
                </Link>
            </nav>

            <div className="pos-f-t d-md-none">

                <nav className="navbar navbar-dark bg-dark px-2 border-bottom border-2">
                    <Link href="/" >
                        <a className="navbar-brand mx-2" style={{ alignItems: "center" }} >
                            <img src="/lani-5andar2.svg" alt="Lani Systems Logo" width={130} height={35} />
                        </a>
                    </Link>
                    <button onClick={() => setOpenMenu(!OpenMenu)} className="navbar-toggler" type="button" >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
                <div className={"collapse " + (OpenMenu ? "show" : "")}>

                    <Link href="/Login"  >
                        <a className="text-white" style={{ alignItems: "center" }}>
                            <div className="bg-dark p-4">
                                <h5 className="text-white h4">Minha Area</h5>
                                <span className="text-muted">Área exclusiva para clientes da Lani Systems</span>
                            </div>
                        </a>
                    </Link>

                </div>
            </div>

        </>
    )
}