using apiPractice.models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Logging;

namespace apiPractice.services
{
    public class UserService
    {
        private readonly ILogger<UserService> _logger;
        private readonly NewUser _newUser;

        public UserService(ILogger<UserService> logger, NewUser newUser)
        {
            _newUser = newUser;
            _logger = logger;
        }

        public UserPersons GetPerson(string email, string password)
        {
            var user = _newUser.User.Include(e => e.Carts).ThenInclude(e => e.BoardInfoProp).Include(e => e.Cards).Include(e => e.Addresses)
                .FirstOrDefault(e => e.Email == email);
            if (user == null || user.Password != password)
            {
                return null;
            }

            return user;
        }

        public void CreateUser(UserPersons user)
        {
            _newUser.User.Add(user);
            _newUser.SaveChanges();
        }

        public void UpdateUser(int id, UserPersons updatedUser)
        {
            var existingUser = _newUser.User.Find(id);  // Corrected to use `User`
            if (existingUser != null)
            {
                existingUser.Firstname = updatedUser.Firstname;
                existingUser.Lastname = updatedUser.Lastname;
                existingUser.Email = updatedUser.Email;
                existingUser.Address = updatedUser.Address;
                existingUser.Password = updatedUser.Password;
                existingUser.City = updatedUser.City;

                _newUser.SaveChanges();  // Corrected to `_newUser.SaveChanges()`
            }
        }

        public UserPersons GetUserById(int id)
        {
            return _newUser.User.Find(id);  // Implemented method to find user by ID
        }
    }
}
