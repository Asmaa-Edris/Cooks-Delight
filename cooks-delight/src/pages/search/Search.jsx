import Banner from "../../components/layout/banner/Banner";
import { useLocation } from "react-router-dom";
import "./search.css";

export default function Search() {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const searchTerm = searchParams.get('q') || '';

    return (
        <>
            <main className="search-page">
                <div className="search-header" style={{ padding: "60px 20px", textAlign: "left", maxWidth: "1200px", margin: "0 auto" }}>
                    {searchTerm ? (
                        <h2 style={{ marginTop: "30px", fontWeight: "bold", color: "black" }}>
                            DISPLAYING RESULTS FOR <span style={{ fontWeight: "bold", color: "var(--primary-orange)" }}> "{searchTerm}"</span>
                        </h2>
                    ) : (
                        <h2 style={{ marginTop: "30px", fontWeight: "normal", color: "var(--text-gray)" }}>
                            Search for your favorite recipes in the navbar
                        </h2>
                    )}
                </div>
            </main >

            <Banner />
        </>
    );
}