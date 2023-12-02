# payment-terminal
Random payment terminal, mimicking an autopay machine with discrete number of notes

## Features
- Public method to naively process change required. It is naive because it doesn't count number of notes, assuming that notes are always available

## TODO
- The highest banknote accepted is 50, so change required is not going to exceed 50
- Make processing change smart(er)
- Add public methods to top up machine
