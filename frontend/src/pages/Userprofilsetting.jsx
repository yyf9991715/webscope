const person = {
    name: 'User',
    theme: {
      backgroundColor: 'white',
      color: 'black'
    }
  };

function Profileimg() {
    return (
      <img
        src="https://i.imgur.com/MK3eW3As.jpg"
        alt="img"
      />
    );
  }
  
  export default function Userprofilsetting() {
    return (
      <>
        <div style={person.style}>
        <h1>{person.name}'s Profil</h1>
        <Profileimg/>
        

        </div>
      </>
    );
  }
  