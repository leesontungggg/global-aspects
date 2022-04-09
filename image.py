import argparse
from PIL import Image

parser = argparse.ArgumentParser()
parser.add_argument('--path', nargs=1)
parser.add_argument('--file-name', nargs=1)
args = parser.parse_args()

im = Image.open(args.path[0] + '/' + args.file_name[0] + ".png").convert('RGBA').convert('P', palette=Image.ADAPTIVE, colors=255)
im.save(args.path[0] + '/' + args.file_name[0] + ".webp", "webp")
