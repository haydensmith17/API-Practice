using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.models;
using apiPractice.services;
using Microsoft.AspNetCore.Mvc;

namespace apiPractice.controller
{
    [ApiController]
    [Route("[controller]")]
    public class AddressController : ControllerBase
    {
        private readonly AddressService _addressService;
        public AddressController(AddressService addressService)
        {
            _addressService = addressService;

        }

        [HttpPost("address")]
        public IActionResult GetAddress([FromBody] Address address)
        {
            _addressService.CreateAddress(address);
            return Ok("ok");
        }
    }
}