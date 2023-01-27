# This is required for Git versions 2.9 or newer
git config core.hooksPath .git/hooks/

# No safety checks, just overwrite whatever is there
cp ./dev/pre-commit .git/hooks/
