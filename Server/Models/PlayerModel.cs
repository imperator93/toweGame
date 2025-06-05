namespace Server.Models;

public class PlayerModel
{
    public string Id { get; set; } = "";
    public int Health { get; set; }
    public int Money { get; set; }
    public List<Structures> structures = [];

}