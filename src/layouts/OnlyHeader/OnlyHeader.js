import { Header } from "../components";

function OnlyHeader({ children }) {
    return (
        <div style={{maxWidth: 1140, margin: '0 auto', }}>
            <Header />
            
            <div className="container">
               {children}
            </div>            
        </div>
    );
}

export default OnlyHeader;
