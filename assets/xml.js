//----------------------------------------------------------------------------
//
//  $Id: PreviewAndPrintLabel.js 11419 2010-04-07 21:18:22Z vbuzuev $ 
//
// Project -------------------------------------------------------------------
//
//  DYMO Label Framework
//
// Content -------------------------------------------------------------------
//
//  DYMO Label Framework JavaScript Library Samples: Print label
//
//----------------------------------------------------------------------------
//
//  Copyright (c), 2010, Sanford, L.P. All Rights Reserved.
//
//----------------------------------------------------------------------------

$(function()
{
    // called when the document completly loaded
    function onload()
    {
        var fullName = document.getElementById('fullName');
        var typeName = document.getElementById('typeName');
        var printButton = document.getElementById('btn');

        // prints the label
        printButton.onclick = function() 
        {
            try
            {
                // open label
                var labelXml = '<?xml version="1.0" encoding="utf-8"?>\
    <DieCutLabel Version="8.0" Units="twips">\
        <PaperOrientation>Landscape</PaperOrientation>\
        <Id>Address</Id>\
          <PaperName>30256 Shipping</PaperName>\
        <DrawCommands/>\
        <ObjectInfo>\
            <TextObject>\
                <Name>Full Name</Name>\
                <ForeColor Alpha="255" Red="0" Green="0" Blue="0" />\
                <BackColor Alpha="0" Red="255" Green="255" Blue="255" />\
                <LinkedObjectName></LinkedObjectName>\
                <Rotation>Rotation0</Rotation>\
                <IsMirrored>False</IsMirrored>\
                <IsVariable>False</IsVariable>\
                <HorizontalAlignment>Center</HorizontalAlignment>\
                <VerticalAlignment>Middle</VerticalAlignment>\
                <TextFitMode>None</TextFitMode>\
                <UseFullFontHeight>True</UseFullFontHeight>\
                <Verticalized>False</Verticalized>\
                <StyledText>\
        <Element>\
          <String>First Last</String>\
          <Attributes>\
            <Font Family="Proxima Nova" Size="24" Bold="True" Italic="False" Underline="False" Strikeout="False"/>\
            <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
          </Attributes>\
        </Element>\
      </StyledText>\
            </TextObject>\
            <Bounds X="512.4277" Y="1271.499" Width="4735.146" Height="492.5776"/>\
        </ObjectInfo>\
    <ObjectInfo>\
    <TextObject>\
      <Name>Participant</Name>\
      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
      <LinkedObjectName></LinkedObjectName>\
      <Rotation>Rotation0</Rotation>\
      <IsMirrored>False</IsMirrored>\
      <IsVariable>True</IsVariable>\
      <HorizontalAlignment>Center</HorizontalAlignment>\
      <VerticalAlignment>Middle</VerticalAlignment>\
      <TextFitMode>ShrinkToFit</TextFitMode>\
      <UseFullFontHeight>True</UseFullFontHeight>\
      <Verticalized>False</Verticalized>\
      <StyledText>\
        <Element>\
          <String>Participant</String>\
          <Attributes>\
            <Font Family="Proxima Nova" Size="14" Bold="False" Italic="False" Underline="False" Strikeout="False"/>\
            <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
          </Attributes>\
        </Element>\
      </StyledText>\
    </TextObject>\
    <Bounds X="1610" Y="1677.006" Width="2540" Height="622.5"/>\
  </ObjectInfo>\
    <ObjectInfo>\
    <ImageObject>\
      <Name>GRAPHIC</Name>\
      <ForeColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      <BackColor Alpha="0" Red="255" Green="255" Blue="255"/>\
      <LinkedObjectName></LinkedObjectName>\
      <Rotation>Rotation0</Rotation>\
      <IsMirrored>False</IsMirrored>\
      <IsVariable>False</IsVariable>\
      <Image>iVBORw0KGgoAAAANSUhEUgAAAMQAAADECAYAAADApo5rAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3hpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNS1jMDIxIDc5LjE1NTc3MiwgMjAxNC8wMS8xMy0xOTo0NDowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo4ZDVjYmE0YS0xYzM5LTRhMjctYTQ5MC0wOTE1YmM2YTM1NWEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTQ4QjBCNEJDN0IzMTFFNUIzN0FEQTcxMzMyQ0RCNzkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTQ4QjBCNEFDN0IzMTFFNUIzN0FEQTcxMzMyQ0RCNzkiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4ZDVjYmE0YS0xYzM5LTRhMjctYTQ5MC0wOTE1YmM2YTM1NWEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6OGQ1Y2JhNGEtMWMzOS00YTI3LWE0OTAtMDkxNWJjNmEzNTVh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</Image>\
      <ScaleMode>Uniform</ScaleMode>\
      <BorderWidth>0</BorderWidth>\
      <BorderColor Alpha="255" Red="0" Green="0" Blue="0"/>\
      <HorizontalAlignment>Center</HorizontalAlignment>\
      <VerticalAlignment>Center</VerticalAlignment>\
    </ImageObject>\
    <Bounds X="335.9998" Y="320.3906" Width="668.5156" Height="600"/>\
  </ObjectInfo>\
    </DieCutLabel>';

                var label = dymo.label.framework.openLabelXml(labelXml);

                // set label text
                label.setObjectText("Full Name", fullName.value);
                label.setObjectText("Participant", typeName.value);
                
                // select printer to print on
                // for simplicity sake just use the first LabelWriter printer
                var printers = dymo.label.framework.getPrinters();
                if (printers.length == 0)
                    throw "No DYMO printers are installed. Install DYMO printers.";

                var printerName = "";
                for (var i = 0; i < printers.length; ++i)
                {
                    var printer = printers[i];
                    if (printer.printerType == "LabelWriterPrinter")
                    {
                        printerName = printer.name;
                        break;
                    }
                }
                
                if (printerName == "")
                    throw "No LabelWriter printers found. Install LabelWriter printer";

                // finally print the label
                label.print(printerName);
            }
            catch(e)
            {
                alert(e.message || e);
            }
        }
    };

    // register onload event
    if (window.addEventListener)
        window.addEventListener("load", onload, false);
    else if (window.attachEvent)
        window.attachEvent("onload", onload);
    else
        window.onload = onload;

} ());