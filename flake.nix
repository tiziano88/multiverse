{
    description = "linc2";
    inputs = {
      nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
      flake-utils.url = "github:numtide/flake-utils";
      gomod2nix.url = "github:nix-community/gomod2nix";
    };
    outputs = { self, nixpkgs, flake-utils, gomod2nix } :
      (flake-utils.lib.eachDefaultSystem
        (system:
          let
            pkgs = import nixpkgs { 
              inherit system;
              overlays = [];
            };
          in {
            devShell = 
              pkgs.mkShell {
                packages = [
                ];
                buildInputs = [
                    pkgs.just
                    pkgs.nodejs

                    pkgs.nodePackages.prettier
                    pkgs.nodePackages.tailwindcss
                    pkgs.nodePackages.vue-cli

                    pkgs.nodePackages.yo
                ];
              };
          }));
}
