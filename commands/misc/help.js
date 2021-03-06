const Discord = require("discord.js");

function sendHelp(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Help`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} ● Requested by ${author.tag}`)
    .setDescription(`Please use ${config.prefix}help <category> to see the commands`)
    .addField("Moderation", "View all moderation commands.", true)
    .addField("Administration", "View all administration commands.", true)
    // .addField("Economy", "View all economy commands.", true)
    // .addField("Experience", "View all experience commands.", true)
    .addField("Developer", "View commands availible to developers.", true)
    .addField("Fun", "View all fun commands.", true)
    .addField("Utility", "View all utility commands.", true)
    .addField("Miscellaneous", "View all other commands.", true);
  return message.channel.send(embed);
}

function sendModeration(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Moderation commands`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} moderation ● Requested by ${author.tag}`)
    .addField(`${config.prefix}purge`, "Deletes a set amount of messages (2-100)", true)
  return message.channel.send(embed);
}

function sendAdministration(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
      .setTitle(`${config.name} - Moderation commands`)
      .setColor(config.mainColor)
      .setFooter(`${config.name} ● ${cmd} administration ● Requested by ${author.tag}`)
      .addField(`${config.prefix}language`, "Shows or changes the current language.", true)
  return message.channel.send(embed);
}

function sendEconomy(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Economy commands`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} economy ● Requested by ${author.tag}`)
    .addField("No commands", "There are currently no commands in this category");
  return message.channel.send(embed);
}

function sendExp(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Experience commands`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} experience ● Requested by ${author.tag}`)
    .addField("No commands", "There are currently no commands in this category");
  return message.channel.send(embed);
}

function sendBotDev(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Bot developer commands`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} developer ● Requested by ${author.tag}`)
    .addField(`${config.prefix}update`, "Update the bot", true)
    .addField(`${config.prefix}ownerbc`, "Sends a broadcast to all guild owners with Tanoshii", true)
  return message.channel.send(embed);
}

function sendFun(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Fun commands`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} fun ● Requested by ${author.tag}`)
    .addField(`${config.prefix}cutepet`, "Sends a random cute pet picture", true)
    .addField(`${config.prefix}neko`, "NSFW | Shows picture of a neko (no nudity)", true)
    .addField(`${config.prefix}dog`, "Sends a random dog picture", true)
    .addField(`${config.prefix}fox`, "Sends a random fox picture", true)
    .addField(`${config.prefix}cat`, "Sends a random cat picture", true)
    .addField(`${config.prefix}bunny`, "Sends a random bunny picture", true)
    .addField(`${config.prefix}catface`, "Sends a ascii cat face", true)
    .addField(`${config.prefix}randomwallpaper`, "Sends you a random wallpaper from desktoprr.co", true)
    .addField(`${config.prefix}8ball`, "Answers every question", true)
  return message.channel.send(embed);
}

function sendUtils(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Utility commands`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} utility ● Requested by ${author.tag}`)
    .addField(`${config.prefix}gtfm`, "Google that for me (If you're too lazy to google)", true)
    .addField(`${config.prefix}lmgtfy`, "Let me google that for you (If someone else is too lazy to google)", true)
    .addField(`${config.prefix}text2qr`, "Converts any string of text to a qr code", true)
    .addField(`${config.prefix}qr2text`, "Converts any url to an image file with an qr code to a text", true)
    .addField(`${config.prefix}isgd`, "Shortens a link for you", true)
    .addField(`${config.prefix}urban`, "NSFW | Searches Urban Dictionary for a specified phrase", true)
    .addField(`${config.prefix}randomurban`, "NSFW | Searches Urban Dictionary for a random phrase", true);
  return message.channel.send(embed);
}

function sendMisc(config, client, cmd, author, message) {
  let embed = new Discord.RichEmbed()
    .setTitle(`${config.name} - Miscellaneous commands`)
    .setColor(config.mainColor)
    .setFooter(`${config.name} ● ${cmd} miscellaneous ● Requested by ${author.tag}`)
    .addField(`${config.prefix}devmessage`, "Send a message to all developers (Used for bug reports, suggestions etc.)", true)
    .addField(`${config.prefix}botinfo`, "Displays info about the bot", true)
    .addField(`${config.prefix}credits`, "List all bot credits.", true)
    .addField(`${config.prefix}dependencies`, "List all bot dependencies (dynamic).", true)
    .addField(`${config.prefix}ping`, "Show the ping of the bot.", true)
    .addField(`${config.prefix}ram`, "Shows the current RAM Usage of all Bots.", true)
    .addField(`${config.prefix}stats`, "Shows some statistics.", true)
    .addField(`${config.prefix}uptime`, "Shows the uptime of the bot.", true)
    .addField(`${config.prefix}guildinfo`, "Shows information about the guild.", true);
  return message.channel.send(embed);
}

module.exports.run = async (prefix, messageArray, cmd, client, message, args, author, guild, config) => {
  if (args.length === 0) {
    return (sendHelp(config, client, cmd, author, message));
  } else if (args.length === 1) {
    if (args[0].toLowerCase() === "moderation" || args[0].toLowerCase() === "mod") {
      return (sendModeration(config, client, cmd, author, message));
    } else if (args[0].toLowerCase() === "admin" || args[0].toLowerCase() === "administration") {
      return (sendAdministration(config, client, cmd, author, message));
    } else if (args[0].toLowerCase() === "economy" || args[0].toLowerCase() === "eco" || args[0].toLowerCase() === "ec") {
      return (sendEconomy(config, client, cmd, author, message));
    } else if (args[0].toLowerCase() === "experience" || args[0].toLowerCase() === "xp" || args[0].toLowerCase() === "exp") {
      return (sendExp(config, client, cmd, author, message));
    } else if (args[0].toLowerCase() === "developer" || args[0].toLowerCase() === "dev") {
      return (sendBotDev(config, client, cmd, author, message));
    } else if (args[0].toLowerCase() === "fun" || args[0].toLowerCase() === "entertainment" || args[0].toLowerCase() === "entertain" || args[0].toLowerCase() === "humor") {
      return (sendFun(config, client, cmd, author, message));
    } else if (args[0].toLowerCase() === "utility" || args[0].toLowerCase() === "utils" || args[0].toLowerCase() === "utilities" || args[0].toLowerCase() === "util") {
      return (sendUtils(config, client, cmd, author, message));
    } else if (args[0].toLowerCase() === "miscellaneous" || args[0].toLowerCase() === "misc") {
      return (sendMisc(config, client, cmd, author, message));
    } else {
      return (sendHelp(config, client, cmd, author, message));
    }
  } else {
    return (sendHelp(config, client, cmd, author, message));
  }
};

module.exports.help = {
  name: "help"
};
