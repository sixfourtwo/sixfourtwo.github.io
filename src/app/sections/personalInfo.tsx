export default function PersonalInfo() {
    const birthDate = new Date(1992, 11, 7);
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear(); 
    if(now.getMonth() <= birthDate.getMonth() || now.getDate() < birthDate.getDate()) age--;

    return (
        <div>
            <p>
                {`I'm Chris, and I am ${age} years old. Welcome to my corner of the internet.
                I am married to my wonderful Charlotte, and about to become a father.
                I currently live in Aarhus, Denmark. I enjoy spending time with the people in my life, 
                challenges, books, coffe, both live and tabletop roleplaying.`}
            </p>
            <p>
                {`I love challenging status quo and thinking outside the box to solve a problem. But my superpower 
                is understanding new things quickly. A real ENTP if you're into that kind of thing.`}
            </p>
        </div>
    );
};