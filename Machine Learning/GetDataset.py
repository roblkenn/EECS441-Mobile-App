from base64 import b64decode
from Datum import Datum
from DatumRepository import DatumRepository
from ImageRepository import ImageRepository
from string import Template

dataset = DatumRepository().read()
imageRepo = ImageRepository()

for i, item in enumerate(dataset):
	blobName = item.blobName
	imageBlob = imageRepo.read(blobName)
	image = b64decode(imageBlob.content)

	filenameTemplate = Template('$i.jpg')
	f = open(filenameTemplate.substitute(i=i), 'wb')
	f.write(image)
	
