using Microsoft.AspNetCore.Mvc;

namespace webforms3.Controllers;

[ApiController]
[Route("[controller]")]
public class IncidientController : ControllerBase
{

    [HttpPost]
    public void Post([FromBody]Incidient incidient)
    {

        Console.WriteLine(incidient.TP);
        

    }
}




public class Incidient{
    public string TP {get;set;} 
    public string Degradation {get;set;} 
    public string Description {get;set;} 
    public string Actions {get;set;} 
    public string Date {get;set;} 

}
