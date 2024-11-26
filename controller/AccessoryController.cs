using apiPractice.models;
using apiPractice.services;
using Microsoft.AspNetCore.Mvc;

namespace apiPractice.controller
{
    [Route("[controller]")]
    public class AccessoryController : ControllerBase
    {
        private readonly AccessoryService _accessoryService;
        public AccessoryController(AccessoryService accessoryService)
        {
            _accessoryService = accessoryService;
        }

        [HttpPost("newAccessory")]
        public IActionResult NewAccessory([FromBody] BoardAccessories accessory)
        {
            _accessoryService.AddNewAccessory(accessory);
            return Ok("ok");
        }

        [HttpGet]
        public ActionResult<BoardAccessories> GetSingleAccessory(int accessoryid)
        {
            var thisAccessory = _accessoryService.GetAccessory(accessoryid);
            return Ok(thisAccessory);
        }

        [HttpGet("all")]
        public ActionResult<BoardAccessories> GetAllAccessories()
        {
            var allAccessories = _accessoryService.GetAllAccessories();
            return Ok(allAccessories);
        }
    }
}