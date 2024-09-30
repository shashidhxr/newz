import Auth from "../components/Auth"

export default function Signup(){
    return(
        <div>
            <div className="flex flex-col items-center justify-center h-screen">
                <Auth type="signup"></Auth>
            </div>
            Hi form signup
        </div>
    )
}