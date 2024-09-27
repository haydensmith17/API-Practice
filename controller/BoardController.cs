using Microsoft.AspNetCore.Mvc;
using apiPractice.services;
using apiPractice.models;

namespace apiPractice.controller
{
    [Route("[controller]")]
    public class BoardController : ControllerBase
    {
        private readonly BoardService _boardService;
        private readonly ILogger<BoardController> _logger;

        public BoardController(ILogger<BoardController> logger, BoardService boardService)
        {
            _logger = logger;
            _boardService = boardService;
        }

        [HttpGet("allBoards")]
        public ActionResult<BoardInfo> Get(int id)
        {
            var thisBoard = _boardService.GetBoard(id);
            return Ok(thisBoard);
        }

        [HttpGet("all")]
        public ActionResult GetAll()
        {
            var thisBoard = _boardService.GetAllBoards();
            return Ok(thisBoard);
        }

        [HttpPost("add")]
        public IActionResult AddNewBoard([FromBody] BoardInfo board)
        {
            _boardService.AddNewBoard(board);
            return Ok("Ok");
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return StatusCode(500, "An error occurred while processing your request.");
        }

        [HttpDelete("deleteProduct")]
        public IActionResult DeleteProduct(int id)
        {
            _boardService.KillBoard(id);
            return Ok("ok");
        }
    }
}