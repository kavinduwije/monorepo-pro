#!/usr/bin/env bash
set -euo pipefail
emulator -avd Pixel_7_API_34 -no-snapshot -netfast -accel auto -partition-size 4096 -no-boot-anim