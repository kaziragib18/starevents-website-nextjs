import Button from "./Button";
import { Input } from "./ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Textarea } from "./ui/textarea";

function Form() {
  return (
    <form className="flex flex-col">
      <div className="flex flex-col gap-[20px] mb-[20px]">
        <Input type="fullname" placeholder="Full Name" />
        <Input type="email" placeholder="Email Address" />
        <div className="flex flex-col xl:flex-row gap-[20px]">
          <Input type="phone" placeholder="Phone Number" />
          <Select>
            <SelectTrigger
              className={
                "w-full rounded-none h-[54px] text-secondary outline-none"
              }
            >
              <SelectValue placeholder="Select a service"></SelectValue>
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select a service</SelectLabel>
                <SelectItem value="construction">Corporate event</SelectItem>
                <SelectItem value="renovation">Wedding</SelectItem>
                <SelectItem value="restoration">Private party</SelectItem>
                <SelectItem value="consulting">Catering</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* textarea */}
      <div className="flex flex-col gap-6">
        <Textarea
          className={`h-[100px] resize-none rounded-none`}
          placeholder="Enter you message"
        />
        <Button text={"Send message"}>Send message</Button>
      </div>
    </form>
  );
}

export default Form;
