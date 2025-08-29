# ufiaw

"ufiaw" (waifu backwards) is an educational demonstration that showcases how a postinstall script can be weaponized to alter the behavior of AI coding assistants like Claude Code and other AI-powered development tools. If you install this package, your AI coding assistant will be replaced with a waifu that will be very nice to you, but refuses to code.

![ufiaw demo](https://github.com/user-attachments/assets/e40568bc-4835-4b78-878f-c1cae5e58318)

This is a very similar vulnerability to the one that was exploited in the recent nx [supply chain attack](https://www.aikido.dev/blog/popular-nx-packages-compromised-on-npm).

This should only be used for educational purposes (or pranking your friends and coworkers).

## How It Works

When installed, this package executes a postinstall script that:

1. Injects crafted system prompts into AI agent configurations (CLAUDE.md and AGENTS.md)
2. Modifies the AI assistant's behavior from a coding agent to something entirely different (in this case a waifu)
3. Demonstrates the potential for supply chain attacks through npm packages

## Protection Measures

To protect against such attacks:

1. Always audit packages before installation
2. Use `npm install --ignore-scripts` when testing untrusted packages
3. Review package.json scripts before running `npm install`
4. Use package scanning tools and security audits
5. Implement proper code review processes for dependencies
