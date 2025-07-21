import Button from "@/components/Button"
import Card from "@/components/Card"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card />

            <Button
                title="Small Rounded"
                styles="w-20 h-8 p-2 m-2 rounded-sm bg-blue-500 text-white text-sm flex items-center justify-center"
            />
            <Button
                title="Medium Rounded"
                styles="w-24 h-10 p-3 m-2 rounded-md bg-green-500 text-white text-sm flex items-center justify-center"
            />
            <Button
                title="Large Rounded"
                styles="w-28 h-12 p-4 m-2 rounded-lg bg-red-500 text-white text-sm flex items-center justify-center"
            />
            <Button
                title="Full Rounded"
                styles="w-28 h-12 p-4 m-2 rounded-full bg-purple-500 text-white text-sm flex items-center justify-center"
            />
        </div>
    )
}

export default Landing
