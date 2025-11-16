import Card from '@/components/Card';
import Button from '@/components/Button';

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        title="Small Button"
        className="text-sm bg-blue-500 text-white rounded-sm"
      />
      <Button
        title="Medium Button"
        className="text-base bg-green-500 text-white rounded-md"
      />
      <Button
        title="Large Button"
        className="text-lg bg-red-500 text-white rounded-full"
      />

      {/* Shapes */}
      <Button
        title="Rounded Small"
        className="bg-purple-500 text-white rounded-sm"
      />
      <Button
        title="Rounded Medium"
        className="bg-yellow-500 text-black rounded-md"
      />
      <Button
        title="Rounded Full"
        className="bg-pink-500 text-white rounded-full"
      />
    </div>
  );
};
export default Landing;
