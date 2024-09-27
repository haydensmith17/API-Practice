using Microsoft.AspNetCore.Mvc;
using apiPractice.services;
using apiPractice.models;
using System.Security.Claims;

namespace apiPractice.controller
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserService _userService;
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger, UserService userService)
        {
            _logger = logger;
            _userService = userService;
        }

        [HttpGet("all")]
        public IActionResult Get(string email, string Password)
        {
            var person = _userService.GetPerson(email, Password);

            if (person == null)
            {
                return Unauthorized("Invalid email or password");
            }

            return Ok(person);
        }

        [HttpPost("update")]
        public IActionResult CreateUser([FromBody] UserPersons user)
        {
            _userService.CreateUser(user);
            return Ok("Ok");
        }

        [HttpPut("save/{id}")]
        public IActionResult UpdateUser(int id, [FromBody] UserPersons user)
        {
            var existingUser = _userService.GetUserById(id);
            if (existingUser == null)
            {
                return NotFound("User not found");
            }

            _userService.UpdateUser(id, user); // Assuming you have this method in your service to update the user
            return Ok("User updated successfully");
        }

    }
}
