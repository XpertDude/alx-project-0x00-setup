import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button title='small' style='rounded-sm' />
      <Button title='medium' style='rounded-md' />
      <Button title='Large' style='rounded-full' />
    </div>
  )
}
export default Landing