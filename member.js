function skillsMember()
{
    var member = {
        name: "John Doe",
        age: 30,
        address: {
            street: "50 Main St",
            city: "Boston",
            state: "MA"
        },
        skills: ["cooking", "baking", "singing"]
    }
    console.log(member);
    console.log(member.name);
    console.log(member.address.city);
    console.log(member.skills[0]);
}git add member.js