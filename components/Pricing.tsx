import { CardSpotlight } from "@/components/ui/card-spotlight";

const cartItems = [
    {pack: 'Starter',
        price: 19.99,
        textOne: 'Full Access Library',
        textTwo: 'Multiple user',
        textThree: 'Refund Policy',
        textFour: 'Google Analytics',
        textFive: '24/7 support',
    },
    {pack: 'Premium Pack',
        price: 29.99,
        textOne: 'Full Access Library',
        textTwo: 'Multiple user',
        textThree: 'Refund Policy',
        textFour: 'Google Analytics',
        textFive: '24/7 support',
    },
    {pack: 'Ultimate',
        price: 39.99,
        textOne: 'Full Access Library',
        textTwo: 'Multiple user',
        textThree: 'Refund Policy',
        textFour: 'Google Analytics',
        textFive: '24/7 support',
    },
]

export function Pricing() {
    
  return (
    <div className="flex flex-col items-center py-10 md:py-0 md:h-[35rem] max-w-5xl mx-auto px-8  ">
        <div className="text-center pb-10 ">
            <h4 className="text-[16px] text-white/[0.5]  ">Deal for your business</h4>
            <h1 className="text-[30px] text-white font-bold">Meet our pricing plan that suit you</h1>
        </div>
     <div className="flex flex-col md:flex-row gap-6">
     {cartItems.map((item, index)=> (
          <CardSpotlight key={index} className="h-96 w-80 text-center">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            {item.pack}
          </p>
          <p className="text-2xl font-bold relative z-20 mt-2 text-white">
           $ {item.price}/per mo
          </p>
          <div className="text-neutral-200 mt-4 relative z-20">
            <ul className="list-none  mt-2">
              <Step title={item.textOne} />
              <Step title={item.textTwo} />
              <Step title={item.textThree} />
              <Step title={item.textFour} />
              <Step title={item.textFive} />
            </ul>
          </div>
         <button className="mt-8 px-4 py-1 rounded text-white font-semibold bg-blue-700 cursor-pointer ">Choose Plan</button>
        </CardSpotlight>
      ))}
     </div>
    </div>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li className="flex gap-2 items-start">
      <CheckIcon />
      <p className="text-white">{title}</p>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-4 w-4 text-blue-500 mt-1 shrink-0"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};
