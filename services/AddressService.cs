using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.models;

namespace apiPractice.services
{
    public class AddressService
    {
        private readonly ILogger<AddressService> _logger;
        private readonly NewUser _newUser;
        public AddressService(ILogger<AddressService> logger, NewUser newUser)
        {
            _newUser = newUser;
            _logger = logger;

        }

        public void CreateAddress(Address address)
        {
            _newUser.Address.Add(address);
            _newUser.SaveChanges();
        }
    }
}