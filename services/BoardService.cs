using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using apiPractice.models;

namespace apiPractice.services
{
    public class BoardService
    {
        private readonly ILogger<BoardService> _logger;
        private readonly NewUser _newUser;

        public BoardService(ILogger<BoardService> logger, NewUser newUser)
        {
            _newUser = newUser;
            _logger = logger;
        }

        public BoardInfo GetBoard(int id)
        {
            var board = _newUser.Board
                .FirstOrDefault(e => e.Id == id);
                return board;
        }
        public List<BoardInfo> GetAllBoards()
        {
            var Boards = _newUser.Board.ToList();
            return Boards;
        }

        public void AddNewBoard(BoardInfo board)
        {
            _newUser.Board.Add(board);
            _newUser.SaveChanges();
        }

        public BoardInfo GetBoardById(int id)
        {
            return _newUser.Board.Find(id);
        }

        public void KillBoard(int id)
        {
            var product = _newUser.Board.FirstOrDefault(e => e.Id == id);
            _newUser.Board.Remove(product);
            _newUser.SaveChanges();
        }

        
    }
}