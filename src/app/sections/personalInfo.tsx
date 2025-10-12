export default function PersonalInfo() {
    const birthDate = new Date(1992, 11, 7);
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear(); 
    if(now.getMonth() <= birthDate.getMonth() || now.getDate() < birthDate.getDate()) age--;

    return (
        <div>
            <p>
                {`I'm Chris, and I am ${age} years old. Welcome to my corner of the internet.
                I currently live in Aarhus, Denmark. I enjoy challenges, books, coffe and the people in my life.
                \n
                I love challenging status quo and thinking outside the box to solve a problem. But my superpower 
                is understanding new things quickly. A real ENTP if you're into that kind of thing.`}
            </p>
        </div>
    );
};