using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Profiles.Services;
using Profiles.Models;
using MongoDB.Bson.IO;
using Newtonsoft.Json;

namespace Profiles.Controllers
{
    // [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ProfilesController : ControllerBase
    {
        private readonly ProfilesServices _profilesCollection;

        public ProfilesController(ProfilesServices profilesCollection)
        {
            _profilesCollection = profilesCollection;
        }

        [HttpGet("{id:length(24)}")]
        public async Task<ActionResult<Profile>> GetById(string id)
        {
            var profileDb = await _profilesCollection.GetByIdAsync(id);

            if (profileDb is null) return NotFound();

            return Ok(profileDb);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Profile Image, IFormFile Img)
        {
            Image.Picture = Img.ToByteArray();
            Image.Length = (int)Img.Length;
             Image.Extension = Img.GetExtension();
            Image.ContentType = Img.ContentType;

            await _profilesCollection.CreateAsync(Image);

            return CreatedAtAction("GetById", new { id = Image.Id }, Image);
        }

        //[HttpPost]
        //public async Task<ActionResult> Create(Profile Image)
        //{
        //    Profile newImage = new Profile();

        //    newImage = Newtonsoft.Json.JsonConvert.DeserializeObject<Profile>(Image.Id);

        //    await _profilesCollection.CreateAsync(newImage);

        //    return CreatedAtAction("GetById", new { id = newImage.Id }, newImage);
        //}


    }
}
