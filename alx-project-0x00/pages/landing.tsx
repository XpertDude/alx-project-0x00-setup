import Button from "@/components/Button"
import Card from "@/components/Card"
const Landing: React.FC = () => {
    return (
        <div>
            <h1 className=" text-xl font-extralight">Landing Page</h1>
            <Card />
            <Button title="See" styles="w-50 h-6 p-2 m-5 rounded-sm rounded-md rounded-full bg-blue-500 text-white text-sm flex items-center justify-center" />
        </div>
    )
}
export default Landing