Git-secrets Information
(https://git-secret.io/)

Why would we want to use git-secret?

There's information (passwords, app secret keys, OAuth secret keys) that we DO NOT want to put out there. Yet having them stored separately is impractical. 

For one, it’s not version controlled, therefore likely to become outdated as the development of your app progresses. 
Also, it adds an extra step to deploying code: Taking your secret-configuration files and adding them where they need to be. This limits deployment automation and demands for a secure server to be maintained, where those secret-configuration files would live.

To avoid these issues and potential security mishaps, we use git-secrets! In short, git-secrets is an encryption system that allows for those secrets to be passed around safely (again, through encryption) and kept under the same versioned flow that we would use with the rest of our code base, keeping secrets up to date. Private keys can be controlled and administered such that only trusted parties can decrypt secrets.

What is git-secret and gpg?
    - GnuPG (more commonly known as GPG) is an implementation of a standard known as PGP (Pretty Good Privacy). It uses a system of "public" and "private" keys for the encryption and signing of messages or data.
    - Git secret is a bash script based on gpg (GNU Privacy Guard), which allows you to encrypt individual files for storage inside of a git repo.
    - Git-secret provides commands to encrypt secret files before pushing to the server, and to decrypt them for local use.



Useful gpg commands:
    - generate a RSA key-pair => gpg --gen-key
    - export your public key => gpg --armor --export your.email@address.com > public-key.gpg
    - Import the public key of someone else (to share the secret with them for instance) => gpg --import public-key.gpg

Setup git-secret:
    1. Make sure you have a gpg RSA key-pair: 
        A public and a secret key identified by your email address. (https://git-secret.io/#using-gpg)
    2. git secret init creates the .gitsecret/ folder. Make sure that the file random_seed  is mentioned in the .gitignore file.
    3. Add the first user to the git-secret by running git secret tell your@gpg.email
    4. Add files you wish to encrypt by running git secret add <filenames…> and make sure they are ignored by mentions in the .gitignore
    5. Git secret hide will encrypt all added files, making it safe to commit your changes.
    6. Git secret reveal will decrypt files.

What would we encrypt on backend? Authentication files? Databases?

With sensitive data being handled by okta or stored in Data Science’s Mongo database I do not believe we have any use cases for this technology at this stage.
