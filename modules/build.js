const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const APP_NAME = 'ethernaught';
const VERSION = '0.1.0';
const ARCH = 'amd64'; // or arm64, i386, etc.
const BINARY_PATH = path.resolve(__dirname, `../target/release/${APP_NAME}`);
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const DEB_DIR = path.resolve(OUTPUT_DIR, `${APP_NAME}_${VERSION}_${ARCH}`);
const DEB_BINARY_PATH = path.join(DEB_DIR, `usr/bin/${APP_NAME}`);

/*
Linux (Debian)	amd64	.deb
Linux (Debian)	arm64	.deb
Linux (Debian)	i386	.deb
Linux (Red Hat)	x86_64	.rpm
Linux (Red Hat)	aarch64	.rpm
macOS	x86_64	.dmg
macOS	arm64	.dmg
Windows	win32	.exe / .msi
Windows	win64	.exe / .msi
*/

exports.build = () => {

};

function createDeb(){
    //REMOVE DEB DIR

    //MAKE DEB DIR
    fs.writeFileSync('', '');
}

function updateRepo(){
}
/*

RUN apk add --no-cache dpkg bash







- we will ignore cargo build for now

#!/bin/bash

set -e  # Exit on error

APP_NAME="ethernaught"
VERSION="0.1.0"
BUILD_TYPE=${1:release}
ARCH="amd64"
BUILD_DIR="target/$BUILD_TYPE"
DEB_DIR="target/deb-pkg"

# Ensure cargo is installed
if ! command -v cargo &> /dev/null; then
    echo "Cargo not found! Install Rust and Cargo first."
    exit 1
fi

# Build Rust project
echo "Building Rust project in $BUILD_TYPE mode..."
glib-compile-resources res/gresources.xml --target=res/resources.gresources
cargo build --profile "$BUILD_TYPE"

# Remove old package directory if exists
rm -rf "$DEB_DIR"

# Create control file
mkdir -p "$DEB_DIR/DEBIAN"
cat > "$DEB_DIR/DEBIAN/control" <<EOF
Package: $APP_NAME
Version: $VERSION
Architecture: $ARCH
Maintainer: DrBrad <brad@bradeagle.com>
Description: Ethernaught - Packet sniffer
EOF

# Copy binary
mkdir -p "$DEB_DIR/usr/local/bin"
cp "$BUILD_DIR/$APP_NAME" "$DEB_DIR/usr/local/bin/"

# Create .desktop file
mkdir -p "$DEB_DIR/usr/share/applications"
cat > "$DEB_DIR/usr/share/applications/ethernaught.desktop" <<EOF
[Desktop Entry]
Name=Ethernaught
GenericName=Ethernaught
Comment=Ethernaught - Packet sniffer
Keywords=packet;sniffer;capture;network;ethernaught
Exec=ethernaught %f
Icon=ethernaught
MimeType=application/vnd.tcpdump.pcap;application/x-pcapng;application/x-snoop;application/x-iptrace;application/x-lanalyzer;application/x-nettl;application/x-radcom;application/x-etherpeek;application/x-visualnetworks;application/x-netinstobserver;application/x-5view;application/x-tektronix-rf5;application/x-micropross-mplog;application/x-apple-packetlogger;application/x-endace-erf;application/ipfix;application/x-ixia-vwr;
Terminal=false
Type=Application
Categories=Network;Monitor;Qt;
EOF

# Create icons
mkdir -p "$DEB_DIR/usr/share/icons/hicolor"
cp -r res/hicolor/* "$DEB_DIR/usr/share/icons/hicolor/" || true

# Create database file
mkdir -p "$DEB_DIR/usr/var/lib/$APP_NAME"
cp database.db "$DEB_DIR/usr/var/lib/$APP_NAME/database.db"

# Build the .deb package
dpkg-deb --build "$DEB_DIR" "target/${APP_NAME}_${VERSION}_${ARCH}.deb"

echo "Deb package created: target/${APP_NAME}_${VERSION}_${ARCH}.deb"















// Ensure output directory exists
fs.mkdirSync(DEB_DIR, { recursive: true });
fs.mkdirSync(path.dirname(DEB_BINARY_PATH), { recursive: true });

// Copy the compiled binary
fs.copyFileSync(BINARY_PATH, DEB_BINARY_PATH);
fs.chmodSync(DEB_BINARY_PATH, 0o755); // Ensure executable permissions

// Copy DEBIAN control files
const CONTROL_DIR = path.resolve(__dirname, 'template/DEBIAN');
const TARGET_CONTROL_DIR = path.join(DEB_DIR, 'DEBIAN');
fs.mkdirSync(TARGET_CONTROL_DIR, { recursive: true });

// Copy control files
fs.readdirSync(CONTROL_DIR).forEach(file => {
    fs.copyFileSync(path.join(CONTROL_DIR, file), path.join(TARGET_CONTROL_DIR, file));
});

// Build the .deb package
const DEB_FILE = `${APP_NAME}_${VERSION}_${ARCH}.deb`;
const DEB_OUTPUT_PATH = path.join(OUTPUT_DIR, DEB_FILE);
execSync(`dpkg-deb --build ${DEB_DIR} ${DEB_OUTPUT_PATH}`);

console.log(`✅ DEB package created at: ${DEB_OUTPUT_PATH}`);
*/
