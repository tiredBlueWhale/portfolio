
type SocialButtonProsp = {
    image: string;
    link?: string;
};
const buttons: SocialButtonProsp[] = [
    {
        image: '/github.svg',

    }
]

const SocialButton = ({ image, link }: SocialButtonProsp) => (
    <a href={link} className="p-2 rounded-full bg-white">

    </a>
)

export const Footer = () => {
    return (
        <div className="flex justify-center items-center">
            {/* {buttons.map((button, index) => <SocialButton key={index} {...button} />)} */}
        </div>
    )
}