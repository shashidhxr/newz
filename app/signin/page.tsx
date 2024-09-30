import Auth from "../components/Auth"

export default function Signin(){
    return(
        <div className="flex flex-col items-center justify-center h-screen">
            <Auth type="signin"></Auth>
        </div>
    )
}