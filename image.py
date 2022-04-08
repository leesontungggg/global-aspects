import argparse

parser = argparse.ArgumentParser()
parser.add_argument('--value-1', nargs=1)
parser.add_argument('--value-2', nargs=1)
parser.add_argument('email', nargs='+')
args = parser.parse_args()

print(args)